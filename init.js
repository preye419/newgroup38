
const mongoose = require('mongoose');

// Connect to MongoDB using your app server's private IP address
mongoose.connect('mongodb://172.31.2.226/devops', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

// Define the schema for the collection
const Dev = mongoose.model('Dev', { name: String });

// Insert sample data into the 'Dev' collection
Dev.insertMany([{ name: 'Preye' }, { name: 'Stephanie' }, { name: 'Sheshe' }])
  .then(() => {
    console.log('Database seeded successfully');
    process.exit();
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
  });
