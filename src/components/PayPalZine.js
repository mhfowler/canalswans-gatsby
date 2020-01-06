import React from 'react'
import Link from 'gatsby-link'
import {MDXRenderer} from "gatsby-plugin-mdx";


export default class Zine extends React.Component {

  render() {

    var checkoutImg = 'https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png'
    var payPal = '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >\n' +
      '<input type="hidden" name="cmd" value="_cart">\n' +
      '<input type="hidden" name="business" value="maxhfowler@gmail.com">\n' +
      '<input type="hidden" name="lc" value="AR">\n' +
      '<input type="hidden" name="item_name" value="Disconnection Practices">\n' +
      '<input type="hidden" name="amount" value="10.00">\n' +
      '<input type="hidden" name="currency_code" value="USD">\n' +
      '<input type="hidden" name="button_subtype" value="products">\n' +
      '<input type="hidden" name="no_note" value="0">\n' +
      '<input type="hidden" name="add" value="1">\n' +
      '<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest">\n' +
      `<input type="image" src="${checkoutImg}" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n` +
      `<img alt="" border="0" src="${checkoutImg}" width="1" height="1">\n` +
      '</form>\n'

    return (
      <div className="zineWrapper">
        <Link className="backButton" to="/zines">← Back To All Zines</Link>
        <div className="zineDetail">
          <img className="zineImg" src={this.props.zine.image}/>
          <div className="zineWriteup">
            <p className="zineTitle">
              {this.props.zine.title}
            </p>
            <p className="zinePrice">
              {this.props.zine.price}
            </p>
            <div>
              <MDXRenderer >{this.props.mdx.body}</MDXRenderer>
            </div>
            <p>
              &mdash;
            </p>
            <p>
                You can purchase this zine with paypal. You will be asked for a shipping
                address as part of the checkout.
            </p>
             <div className="checkoutWrapper" dangerouslySetInnerHTML={{__html: payPal}}></div>
             <br/>
             <p>
              Or you can order a zine by paying me on venmo @Max-Fowler, and
              emailing me at maxhfowler@gmail.com with
              your shipping address and what zine you would like.
             </p>
          </div>
        </div>

      </div>
    )
  }
}