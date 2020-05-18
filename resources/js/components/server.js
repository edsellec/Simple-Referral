//route for insert data
app.get('/', function (req, res) {
  connection.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});