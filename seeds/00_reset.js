exports.seed = function(knex, Promise) {
    return knex.raw('TRUNCATE blog; ALTER SEQUENCE blog_id_seq restart with 1;')
}
