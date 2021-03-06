import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecCounter} />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          RESULT
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// mapStateToProps --> is a function that receives state as a param & Connect with reducer's state into reducer.js.
// This function gets value of state into reducer & store it into props of this Component.
const mapStateToProps = (state) => {
  return {
    // ctr --> name of prop that will work with into this Component [this.props.ctr] & counter get from state of reducer.js.
    // ctrReducer and resReducer are sub states. check index.js.
    ctr: state.ctrReducer.counter,
    storedResults: state.resReducer.results,
  };
};

// mapDispatchToProps --> is a function that receives dispatch function as a param & Connect with reducer's action into reducer.js.
// This function updates value of state into reducer through action prop.
const mapDispatchToProps = (dispatch) => {
  return {
    // 'type' property is V.IMPORTANT for dispatch function to work with action prop into reducer.js. Don't forget it.
    // type & val can be connected by reducer's action prop into reducer.js.
    onIncCounter: () => dispatch(actionCreators.inc()),
    onDecCounter: () => dispatch(actionCreators.dec()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubCounter: () => dispatch(actionCreators.sub(15)),
    onStoreResult: (ctr) => dispatch(actionCreators.storeResult(ctr)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

// connect --> method [from react-redux lib.] takes mapStateToProps & mapDispatchToProps as args
// to connect redux with Counter Component & connect global state.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
