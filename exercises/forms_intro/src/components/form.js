import React from "react";

class Form extends React.Component {

    genNames() {
        this.nameList = this.props.names.map((names, i) => {
            return (
                <div key={names + i}>
                    <p className="stuff" onClick={ () => {
                        this.props.handleRemove(i)
                    }} >
                        {names}
                    </p>
                </div>
            )
        });
    }

    render() {

        this.genNames();

        return (
            <div className="col-md-12">
                <div>
                    <h1> {this.props.brand} </h1>


                    <label>
                        Name:
                        <input type="text" className="form-control" name="name" value={this.props.nameValue}
                               onChange={this.props.handleInput} />
                    </label>
                    <input type="submit" className="btn btn-info" value="Submit" onClick={this.props.handleClick}/>
                    <br/><br/>


                    <div className="row">
                        <div className="col-md-offset-4 col-md-4">
                            <div className="name-list">
                                {this.nameList}
                            </div>
                        </div>
                    </div>



                    {/**********
                     Form Submit
                     **********/}
                    {/*<form onSubmit={ () => {*/}
                    {/*this.props.handleClick()*/}
                    {/*}}>*/}
                    {/*<label>*/}
                    {/*Name:*/}
                    {/*<input type="text" name="name" value={this.props.nameValue} onChange={this.props.handleInput} />*/}
                    {/*</label>*/}
                    {/*<input type="submit" className="btn btn-success" value="Submit"/>*/}
                    {/*</form>*/}


                </div>
            </div>
        )
    }
}

export default Form;