import React from 'react'
import SLink from './SLink.js'


class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
    };
  }

  componentDidMount(){
     this.emailInput.focus();
  }

    render() {
        return (
					<form action="https://mfowler.us17.list-manage.com/subscribe/post" method="POST" target="blank" noValidate>
                  <input type="hidden" name="u" value="6c6d8e78103fbc8ddebf845a3"/>
                <input type="hidden" name="id" value="b1b22a6281"/>
                <label htmlFor='MERGE0'>
                    Enter your email:
                    <input
                        ref={(input) => { this.emailInput = input; }}
                        type="email"
                        className="email-input"
                        name="EMAIL"
                        id="MERGE0"
                        value={this.state.emailValue}
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                        autoCapitalize="off"
                        autoCorrect="off"
                     />
                </label>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
              </form>
        )
    }
}


const Newsletter = () => {
  return (
   <div className="newsletter">
		 <img src="/mfowler/img/peaceful.jpg" className="no-mobile" style={{width: "300px", "float": "left", "margin-right": "80px"}} />
      <div className="form-holder">
				<p style={{"margin-bottom": "15px"}}>
					A mailing list of <a href="http://twitter.com/notplants">@notplants</a>.
				</p>
			<div className="mc-field-group">
				<SubscribePage/>
			</div>
    </div>
   </div>
  )
}

export default Newsletter
