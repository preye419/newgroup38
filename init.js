
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.31.2.226/devops', { useNewUrlParser: true, useUnifiedTopology: true });
const Dev = mongoose.model('Dev', { name: String });

Dev.insertMany([{ name: 'Preye' }, { name: 'Stephanie' }, { name: 'Sheshe' }])
  .then(() => {
    console.log('Database seeded successfully');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });