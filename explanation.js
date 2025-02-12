const express  = require('express');
const morgan = require('morgan');
const totalStudents = require ("./heefehakin");
const subtractStudents = require('./controller/controller');


const app = express();
app.use(morgan('dev'));
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is a test server");
});

app.get("/subtractStudents", (req, res) => {
    const { boys, girls} = req.body;
    const students = subtractStudents(boys, girls);
    // console.log(students);
    res.json(students);  
});



// app.get('/', (req, res) => {
//     res.send("Hello world!!!!!!")
// })

// app.post('/about', (req, res) => {
//     res.send("You are on the about page");
//  })

// app.post('/post', (req, res) => {
//     res.send("You are on the post page");
// })

// app.put('/put', (req, res) => {
//     res.send("You are on the put page");
// })

// app.delete('/delete', (req, res) => {
//     res.send("You are on the delete page");
// })

// app.patch('/patch', (req, res) => {
//     res.send("You are on the patch page");
// })

 // const totalStudents = (boys, girls) => {
    
//     const students = boys + girls;
//     return students;
// };

// module.exports = totalStudents;

// const express = require('express');
// const morgan = require('morgan'); 


// const app = express();
// app.use = (morgan('dev'));
// const port = 3000





// app.listen(port, () => {
//    console.log(`sever is running on port ${port}`);
// });


// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// });


// const totalStudents = (boys, girls) => {
    
//     const students = boys + girls;
//     return students;
// };

// module.exports = totalStudents;

// const express = require('express');
// const morgan = require('morgan'); 


// const app = express();
// app.use = (morgan('dev'));
// const port = 3000


// const totalStudents = (boys, girls) => {
    
//     const students = boys + girls;
//     return students;
// };

// module.exports = totalStudents;

// const express = require('express');
// const morgan = require('morgan'); 


// const app = express();
// app.use = (morgan('dev'));
// const port = 3000





// app.listen(port, () => {
//    console.log(`sever is running on port ${port}`);
// });

 



// app.listen(port, () => {
//    console.log(`sever is running on port ${port}`);
// });

 // const totalStudents = (boys, girls) => {
    
//     const students = boys + girls;
//     return students;
// };

// module.exports = totalStudents;

// const express = require('express');
// const morgan = require('morgan'); 


// const app = express();
// app.use = (morgan('dev'));
// const port = 3000





// app.listen(port, () => {
//    console.log(`sever is running on port ${port}`);
// });
// const totalStudents = (boys, girls) => {
    
//     const students = boys + girls;
//     return students;
// };

// module.exports = totalStudents;

// const express = require('express');
// const morgan = require('morgan'); 


// const app = express();
// app.use = (morgan('dev'));
// const port = 3000





// app.listen(port, () => {
//    console.log(`sever is running on port ${port}`);
// });

 

 

