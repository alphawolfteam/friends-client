const currentUser = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJPbFNQa0NuOVNzVzE3Ul95NVE0ZlB1b3Y4bVA2bk4iLCJzdWIiOiJ0MjM0NTg3ODlAamVsbG8uY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImNsaWVudElkIjoiU3R4blEwdkN2WFNaVTU5NHNkM0lzak9HRzNvZWp6MWdDRE1IdGlVYyIsImNsaWVudE5hbWUiOiJGcmllbmRzY2xpZW50IiwidXNlciI6eyJpZCI6InQyMzQ1ODc4OUBqZWxsby5jb20iLCJhZGZzSWQiOiJ0MjM0NTg3ODlAamVsbG8uY29tIiwiZ2VuZXNpc0lkIjoiNWU1Njg4MzI0MjAzZmM0MDA0MzU5MWFhIiwibmFtZSI6eyJmaXJzdE5hbWUiOiLXoNeZ15nXp9eZIiwibGFzdE5hbWUiOiLXkNeT15nXk9ehIn0sImRpc3BsYXlOYW1lIjoidDIzNDU4Nzg5QGplbGxvLmNvbSIsInByb3ZpZGVyIjoiR2VuZXNpcyIsImVudGl0eVR5cGUiOiJkaWdpbW9uIiwiY3VycmVudFVuaXQiOiJuaXRybyB1bml0IiwiZGlzY2hhcmdlRGF5IjoiMjAyMi0xMS0zMFQyMjowMDowMC4wMDBaIiwicmFuayI6Im1lZ2EiLCJqb2IiOiLXqNeV16bXlyIsInBob25lTnVtYmVycyI6WyIwMjY2NjY5OTgiLCIwNTItMTIzNDU2NSJdLCJhZGRyZXNzIjoi16jXl9eV15Eg15TXntee16rXp9eZ150gMzQiLCJwaG90byI6bnVsbH0sImlhdCI6MTYxMDg5MjA4MSwiZXhwIjoxNjEwODkyMjYxLCJpc3MiOiJodHRwczovLzUxLjE0NC4xNzguMTIxIn0.tXCLSATGCKSLC6tSz0c1QIkqrCG-ynwq-b9tWwYC1XM';

module.exports = (req, res) => {
  res.cookie('friends-token', currentUser);
  res.redirect('http://localhost:3000');
};
