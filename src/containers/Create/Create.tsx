import React from "react";
import { connect } from "react-redux";
import { ChangeEvent, FormEvent } from "react";

import Header from "../../components/Header/Header";
import { addTodo } from "../../actions/TodoActions";

interface CreateProps{
  addTodo(text: string): void;
}

interface CreateState{
  input: string;
}

class Create extends React.Component<CreateProps, CreateState> {
  public constructor(props: CreateProps) {
    super(props);

    this.state = {
      input: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    this.setState({
      input: event.target.value,
    });
  }

  private onSubmit(event: FormEvent<HTMLButtonElement>): void {
    event.preventDefault();

    this.props.addTodo(this.state.input);
    this.setState({
      input: "",
    });
  }

  public render() {
    return (
      <div>
        <Header />
        <h1> Create Todo </h1>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.input}
            onChange={this.onChange}
          />
          <button type="submit"> Add Todo </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text: string) => {
    dispatch(addTodo(text));
  },
});

export default connect(undefined, mapDispatchToProps)(Create);
