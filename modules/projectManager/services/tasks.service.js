var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var _ = require('lodash');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
    getTaskNumber: getTaskNumber,
    getTask: getTask,
    updateTask: updateTask,
    createTask: createTask,
    deleteTask: deleteTask,
    getTaskPage: getTaskPage
};

function getTaskNumber() {
    var query = [
        'MATCH (n: Task)',
        'RETURN count(n) AS sum'
    ];

    var params = {};

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    });
}

function getTask(id) {
    var query = [
        'MATCH (n: Task)-[r]-()',
        'WHERE id(n) = {id}',
        'RETURN n, r'
    ];

    var params = {
        id: Number(id)
    };

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    });
}

function deleteTask(id) {
    var query = [
        'MATCH (n: Task) WHERE ID(n)={id}',
        'OPTIONAL MATCH (n)-[r]-()',
        'WITH n, r',
        'OPTIONAL MATCH (wl: WorkLog)-[:HAS_TASK]->(n)',
        'WITH n, r, wl',
        'OPTIONAL MATCH (wl)-[r1]-()',
        'DELETE r, n, r1, wl'
    ];

    var params = {
        id: Number(id)
    };

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    });
}

function getTaskPage(fromItem, toItem, taskQuery) {
    var start = 0;
    var quantity = Number.MAX_SAFE_INTEGER;

    query = [
        'MATCH (n: Task)'
    ];
    if (taskQuery) {
        query.push(
            'WHERE n.subject CONTAINS {taskQuery} OR n.description CONTAINS {taskQuery}'
        );
    }

    query.push(
        'OPTIONAL MATCH (n)-[r]-()',
        'WITH DISTINCT n, collect(r) as rel',
        'RETURN n, rel'
    );

    if (fromItem && toItem) {
        start = fromItem;
        quantity = toItem - fromItem + 1;
        query.push(
            'SKIP {start} LIMIT {quantity}'
        );
    }
    var params = {
        start: Number(start),
        quantity: Number(quantity),
        taskQuery: taskQuery
    };

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    }).then(function(result) {
        if (result) {
            var tasks = [];
            for (var i = 0; i < result.length; i++) {
                tasks[i] = _.clone(result[i].n.properties);
            }
            return tasks;
        } else {
            return [];
        }
    });
}

function createTask(featureId, subject, description, taskTrackerId, taskStatusId, taskPriorityId, userId, taskCategoryId, startDate, dueDate, doneRatio, estimatedHours) {

    var query = [
        'MATCH (f: Feature)',
        'WHERE id(f) = {featureId}',
        'MATCH (tt: TaskTracker)',
        'WHERE id(tt) = {taskTrackerId}',
        'MATCH (ts: TaskStatus)',
        'WHERE id(ts) = {taskStatusId}',
        'MATCH (tp: TaskPriority)',
        'WHERE id(tp) = {taskPriorityId}',
        'MATCH (u: User)',
        'WHERE id(u) = {userId}',
        'MATCH (tc: TaskCategory)',
        'WHERE id(tc) = {taskCategoryId}',
        'CREATE (n: Task {subject: {subject}, description: {description}, startDate: {startDate}, dueDate: {dueDate}, doneRatio: {doneRatio}, estimatedHours: {estimatedHours}})-[:HAS_FEATURE]->(f), (n)-[:HAS_TASK_TRACKER]->(tt)',
        'RETURN n'
    ];

    var params = {
        featureId: Number(featureId),
        subject: subject,
        description: description,
        taskTrackerId: Number(taskTrackerId),
        taskStatusId: Number(taskStatusId),
        taskPriorityId: Number(taskPriorityId),
        userId: Number(userId),
        taskCategoryId: Number(taskCategoryId),
        startDate: startDate,
        dueDate: dueDate,
        doneRatio: Number(doneRatio),
        estimatedHours: Number(estimatedHours)
    };

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    });
}

function updateTask(id, featureId, subject, description, taskTrackerId, taskStatusId, taskPriorityId, userId, taskCategoryId, startDate, dueDate, doneRatio, estimatedHours) {
    var query = [
        'MATCH (n: Task)',
        'WHERE id(n) = {id}',
        'OPTIONAL MATCH (n)-[r]-()',
        'DELETE r',
        'WITH n',
        'MATCH (f: Feature)',
        'WHERE id(f) = {featureId}',
        'MATCH (tt: taskTrackerId)',
        'WHERE id(tt) = {taskTrackerId}',
        'MATCH (ts: TaskStatus)',
        'WHERE id(ts) = {taskStatusId}',
        'MATCH (tp: TaskPriority)',
        'WHERE id(tp) = {taskPriorityId}',
        'MATCH (u: User)',
        'WHERE id(u) = {userId}',
        'MATCH (tc: TaskCategory)',
        'WHERE id(tc) = {taskCategoryId}',
        'SET n.subject = {subject}',
        'SET n.description = {description}',
        'SET n.startDate = {startDate}',
        'SET n.dueDate = {dueDate}',
        'SET n.doneRatio = {doneRatio}',
        'SET n.estimatedHours = {estimatedHours}',
        'MERGE (n)-[:HAS_PROJECT]->(p)',
        'MERGE(n)-[:HAS_FEATURE_STATUS]->(fs)',
        'MERGE (n)-[:HAS_FEATURE_PRIORITY]->(fp)',
        'MERGE (n)-[:HAS_USER]->(u)',
        'MERGE (n)-[:HAS_FEATURE_CATEGORY]->(fc)',
        'RETURN n'
    ];

    var params = {
        featureId: Number(featureId),
        subject: subject,
        description: description,
        taskTrackerId: Number(taskTrackerId),
        taskStatusId: Number(taskStatusId),
        taskPriorityId: Number(taskPriorityId),
        userId: Number(userId),
        taskCategoryId: Number(taskCategoryId),
        startDate: startDate,
        dueDate: dueDate,
        doneRatio: Number(doneRatio),
        estimatedHours: Number(estimatedHours)
    };

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    });
}
