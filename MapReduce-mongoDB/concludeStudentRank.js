
// initial data set 

[  
{ "_id" : ObjectId("5a1f9ce431c157f3ec2a3c39"), "name" : "Aseem", "subject" : "science", "marks" : 99 },
{ "_id" : ObjectId("5a1f9ce431c153f3ec2aec3a"), "name" : "Aseem", "subject" : "maths", "marks" : 98 },
{ "_id" : ObjectId("5a1f9ce433c157f3ec2aec3b"), "name" : "Aseem", "subject" : "sports", "marks" : 96 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec39"), "name" : "Midhu", "subject" : "science", "marks" : 68 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec3a"), "name" : "Midhu", "subject" : "maths", "marks" : 98 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec3b"), "name" : "Midhu", "subject" : "sports", "marks" : 77 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec3c"), "name" : "Akhil", "subject" : "science", "marks" : 67 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec3d"), "name" : "Akhil", "subject" : "maths", "marks" : 87 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec3e"), "name" : "Akhil", "subject" : "sports", "marks" : 89 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec3f"), "name" : "Anish", "subject" : "science", "marks" : 67 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec40"), "name" : "Anish", "subject" : "maths", "marks" : 78 },
{ "_id" : ObjectId("5a1f9ce431c157f3ec2aec41"), "name" : "Anish", "subject" : "sports", "marks" : 90 },
]

// Map Function 
var map = function() {emit(this.name,this.marks);};

// Reduce Function 
var reduce = function(name,marks) {return Array.sum(marks);};

// Conclude or summarize  
db.students.mapReduce(
    map,
    reduce,
    { out: "totals" }
 );
