import React, { Component } from "react";
import { Table, Divider } from "antd";
import StepOne from "./FormStepOne";
import StepTwo from "./FormStepTwo";
import StepFinal from "./FormStepThree";

// const [form] = Form.useForm();
class FinalForm extends Component {
  state = {
    step: 1,
    stepOneFields: {
      applicationName: "",
      applicationDesc: "",
    },
    stepTwoFields: {
      userName: "",
      users: [
        {
          lastName: "",
          firstName: "",
          age: "",
        },
      ],
    },
    stepThreeFields: {
      fatherName: "",
      motherName: "",
    },

    show_final_values: false,
  };

  handleNextButton = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleBackButton = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleConfirmButton = (values) => {
    const { stepThreeFields } = this.state;
    this.setState(
      {
        stepThreeFields: {
          ...stepThreeFields,
          ...values,
        },
      },
      () =>
        this.setState({ show_final_values: true }, () =>
          console.log(this.state)
        )
    );
  };

  getFinalStepValue = (values) => {
    const { stepThreeFields } = this.state;
    this.setState({
      stepThreeFields: {
        ...stepThreeFields,
        ...values,
      },
    });
  };

  getStepOneValue = (values) => {
    const { stepOneFields } = this.state;
    console.log(values);
    this.setState({
      stepOneFields: {
        ...stepOneFields,
        ...values,
      },
    });
  };

  getStepTwoValue = (values) => {
    const { stepTwoFields } = this.state;
    this.setState({
      stepTwoFields: {
        ...stepTwoFields,
        ...values,
      },
    });
  };

  render() {
    const { step, stepOneFields, stepTwoFields, stepThreeFields } = this.state;
    if (step === 1) {
      return (
        <div>
          {<h1> STEP 1 </h1>}
          <StepOne
            {...stepOneFields}
            handleNextButton={this.handleNextButton}
            submittedValues={this.getStepOneValue}
          />
        </div>
      );
    } else if (step === 2) {
      return (
        <div>
          {<h1> STEP 2 </h1>}
          <StepTwo
            {...stepTwoFields}
            handleNextButton={this.handleNextButton}
            handleBackButton={this.handleBackButton}
            submittedValues={this.getStepTwoValue}
          />
        </div>
      );
    } else {
      return (
        <div>
          {<h1> FINAL STEP </h1>}
          <StepFinal
            {...stepThreeFields}
            handleConfirmButton={this.handleConfirmButton}
            handleBackButton={this.handleBackButton}
            submittedValues={this.getFinalStepValue}
          />
          {/* FOR DISPLAYING THE  FORM VALUES ON FINAL SUBMIT */}
          {this.state.show_final_values ? (
            <p>
              <Divider orientation="left"> Step-1 Values</Divider>
              <p> APPLICATION NAME:-{stepOneFields.applicationName}</p>
              <p> APPLICATION DESC:- {stepOneFields.applicationDesc}</p>
              <br />
              <Divider orientation="left"> Step-2 Values</Divider>
              <p> USER NAME :- {stepTwoFields.userName}</p>
              Dynamic Fields <br />
              <Table
                dataSource={stepTwoFields.users}
                columns={[
                  {
                    title: "F Name",
                    dataIndex: "firstName",
                    key: "firstName",
                  },
                  {
                    title: "L Name",
                    dataIndex: "lastName",
                    key: "lName",
                  },
                  {
                    title: "age",
                    dataIndex: "age",
                    key: "age",
                  },
                ]}
              />
              <Divider orientation="left"> Step-3 Values</Divider>
              <p> MOTHER'S NAME :-{stepThreeFields.motherName} </p>
              <p>FATHER'S NAME :-{stepThreeFields.fatherName} </p>
              <br />
            </p>
          ) : null}
        </div>
      );
    }
  }
}

export default FinalForm;
