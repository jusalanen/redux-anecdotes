import React from 'react'
import PropTypes from 'prop-types'
import filterReducer from '../reducers/filterReducer'


class Filter extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  handleChange = (event) => {
    const filter = event.target.value
    this.props.store.dispatch(
      filterReducer.actionFor.filterChange(filter))
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
      filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter
