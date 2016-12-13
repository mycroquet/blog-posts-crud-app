exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('blog').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('blog').insert({
                    name: 'Michael',
                    title: 'What happened today?',
                    body: 'A bunch of text regarding what happened today.',
                    date_created: '12/01/2016'
                }),
                knex('blog').insert({
                    name: 'James',
                    title: 'Cosmic Waste',
                    body: 'A bunch of text regarding cosmic waste. It is a problem.',
                    date_created: '12/02/2016'
                }),
                knex('blog').insert({
                    name: 'Sara',
                    title: 'Where are the Hansons today?',
                    body: 'MMMMbop!',
                    date_created: '12/03/2016'
                }),
                knex('blog').insert({
                    name: 'John',
                    title: 'What is your favorite thing about winter?',
                    body: 'No. Never. Don\'\t even think about it. Stop thinking about it. I SAID STOP!!',
                    date_created: '12/04/2016'
                }),
                knex('blog').insert({
                    name: 'Murph',
                    title: 'What are your favorite TV shows?',
                    body: 'If you believe in yourself, go double or nothing. Well, depending on how long it takes you to calculate what double is. If you\'\re terrible at maths, don\'\t.',
                    date_created: '12/05/2016'
                }),
                knex('blog').insert({
                    name: 'Dash',
                    title: 'How have you changed since you were younger?',
                    body: 'Yes. Most definitely, yes.',
                    date_created: '12/06/2016'
                }),
                knex('blog').insert({
                    name: 'Dillon',
                    title: 'Would you prefer to live in an urban area or a rural area?',
                    body: 'As long as no animals are harmed.',
                    date_created: '12/07/2016'
                }),
                knex('blog').insert({
                    name: 'Chris',
                    title: 'What is the worst thing about your gender?',
                    body: 'A bird in the hand is worth two in the bush. I don\'\t really understand that to be honest. Why is the bird in the hand? Surely that\'\s not safe transportation of pets or meats. Which is a roundabout way of saying no.',
                    date_created: '12/08/2016'
                }),
                knex('blog').insert({
                    name: 'Cole',
                    title: 'What kind of old person do you want to grow up to become?',
                    body: 'What have you got to lose? A limb? If so, maybe not then.',
                    date_created: '12/09/2016'
                }),
                knex('blog').insert({
                    name: 'Aaron',
                    title: 'What is one thing that you would like to change about the world?',
                    body: 'Why Not?',
                    date_created: '12/10/2016'
                })
            ])
        })
}
