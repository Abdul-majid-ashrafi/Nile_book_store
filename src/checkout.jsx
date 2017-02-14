const React = require('react')
const { Link } = require('react-router')
class Checkout extends React.Component {
    render() {
        console.log('this.props', this.props.route.cartItems)

        let count = 0
        return <div><h1>Invoice</h1><table className="table table-bordered"><tbody>
            {Object.keys(this.props.route.cartItems).map((item, index, list) => {
                count += this.props.route.cartItems[item]
                console.log('count', count)
                return <tr key={item}>
                    <td>{this.props.route.products[item].title}</td>
                    <td>{this.props.route.cartItems[item]}</td>
                </tr>
            })}
        </tbody></table><p>Total: {count}</p></div>
    }
}
module.exports = Checkout