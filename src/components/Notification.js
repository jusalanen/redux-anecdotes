import React from 'react'
import PropTypes from 'prop-types'


class Notification extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    return (
      <div style={style}>
        {this.props.store.getState().notification}
      </div>
    )
  }
}

export default Notification
