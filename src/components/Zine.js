import React from 'react'
import Link from 'gatsby-link'
import {MDXRenderer} from "gatsby-plugin-mdx";


export default class Zine extends React.Component {
  render() {

    var payPal = '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >\n' +
      '<input type="hidden" name="cmd" value="_cart">\n' +
      '<input type="hidden" name="business" value="maxhfowler@gmail.com">\n' +
      '<input type="hidden" name="lc" value="AR">\n' +
      '<input type="hidden" name="item_name" value="Disconnection Practices">\n' +
      '<input type="hidden" name="amount" value="15.00">\n' +
      '<input type="hidden" name="currency_code" value="USD">\n' +
      '<input type="hidden" name="button_subtype" value="products">\n' +
      '<input type="hidden" name="no_note" value="0">\n' +
      '<input type="hidden" name="add" value="1">\n' +
      '<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest">\n' +
      '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n' +
      '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n' +
      '</form>\n'

    return (
      <div className="zineWrapper">
        <Link className="backButton" to="/zines">← Back To All Zines</Link>
        <div className="zineDetail">
          <img className="zineImg" src={this.props.zine.img}/>
          <div className="zineWriteup">
            <p className="zineTitle">
              {this.props.zine.title}
            </p>
            <p className="zinePrice">
              {this.props.zine.price}
            </p>
            <p>
              <MDXRenderer >{this.props.mdx.body}</MDXRenderer>
            </p>
            <div className="checkoutWrapper" dangerouslySetInnerHTML={{__html: payPal}}></div>
          </div>
        </div>

      </div>
    )
  }
}