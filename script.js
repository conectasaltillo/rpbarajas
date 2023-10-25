var app = new Vue({
  el: '#app',
  data: {
    items: []
  },
  mounted: function () {
    this.loadItems();
  },
  methods: {
    loadItems: function () {
      // Init variables
      var self = this
      var app_id = "appOSUJYFdJvr2XwX";
      var app_key = "key7TEOcZYdfbvslW";
      this.items = []
   
     // Define the formatUrl method
      function formatUrl(url) {
        return url.toLowerCase();
      }
      axios.get("https://api.airtable.com/v0/" + app_id + "/Eventos?view=CD", {
        headers: {
          Authorization: "Bearer " + app_key
        }
      }).then(function (response) {
        self.items = response.data.records
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}) 


// axios.get('https://api.airtable.com/v0/appgD6EZY3R3WhL9F/Content?api_key=keyrajnIDof0RZBxj')
//   .then(res => console.log(res.data))

// axios.get('https://api.airtable.com/v0/appgD6EZY3R3WhL9F/Cities?api_key=keyrajnIDof0RZBxj')
//   .then(res => console.log(res.data))
