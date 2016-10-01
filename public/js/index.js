const Profile = ({user, edit, toggle}) => {
  if (!edit){
    return (
      <div>
        <img src={user.img} />
        <h3>{user.name}</h3>
        <div className="well">
          {user.info}
        </div>
        <button
          className="btn btn-default btn-sm"
          onClick={ () => toggle() }>Edit  <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
      </div>
    )
  } else {
    return <span></span>
  }
}

const Edit = ({user, show, submit}) => {
  if (show){
    return (
      <form>
        <div className="form-group">
          <label>Name: </label>
          <input type="text"
            className="form-control"
            defaultValue={user.name}
            onChange={ev => user.name = ev.target.value}></input>
        </div>
        <div className="form-group">
          <label>Photo: </label>
          <input type="text"
            className="form-control"
            defaultValue={user.img}
            onChange={ev => user.img = ev.target.value}></input>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <div>
            <textarea
              className="form-control"
              defaultValue={user.info}
              onChange={ev => user.info = ev.target.value}></textarea>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={ () => submit() }>Submit</button>
      </form>
    )
  } else {
    return <span></span>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: '',
        img: '',
        info: ''
      },
      showEdit: false,
    };
    this.getUser()

    this.toggleEdit = () => {
      this.setState({showEdit: !this.state.showEdit})
    }

    this.submit = () => {
      console.log(this.state.user);
      var self = this;
      $.ajax({
        method: "PUT",
        url: '/api/users/1',
        data: self.state.user
      }).done(function(res){
        console.log(res);
        self.setState({showEdit: false});
      })
    }

  }

  getUser() {
    var self = this;
    $.ajax({
      method:"GET",
      url:'/api/users/1',
    }).done(function(user){
      self.setState({user})
    });
  }

  render() {
    return (
      <div>
        <Profile user={this.state.user} edit={this.state.showEdit} toggle={this.toggleEdit}/>
        <Edit user={this.state.user} show={this.state.showEdit} submit={this.submit}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'))
