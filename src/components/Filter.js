import React from 'react'
import PropTypes from 'prop-types'
import actionFor from '../reducers/filterReducer'
import { connect } from 'react-redux'


class Filter extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  handleChange = (event) => {
    const filter = event.target.value
    this.props.actionFor.filterChange(filter)
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  actionFor
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps)(Filter)

export default ConnectedFilter
