exports.up = function(knex, Promise) {
    return knex.schema.createTable('blog', function(table) {
        table.increments();
        table.text('name');
        table.text('title');
        table.text('body');
        table.date('date_created');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('blog');
};
