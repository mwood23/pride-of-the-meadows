import React from 'react';
import { navigateTo } from 'gatsby-link';
import styled from 'styled-components';
import { Container } from '../shared/blocks/Container';
import FancyButton from '../shared/elements/FancyButton';

const FormWrapper = styled.div`
  max-width: 700px;
  margin: 4rem auto;
  padding: 3rem 2rem;
  border-radius: 6px;
  background-color: #ffffff;
  border: solid 1px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 46px;
  }

  form {
    margin-bottom: 0;
  }
`;
const Inputfield = styled.div`
  margin-bottom: 1rem;

  label {
    line-height: 2;
    color: #333333;

    input {
      height: 36px;
      border-radius: 6px;
      border: solid 1px rgba(0, 0, 0, 0.2);
      padding: 0 0.5rem;
      width: 100%;

      &:-moz-ui-invalid:not(output) {
        box-shadow: none;
      }
    }
  }
`;

const SubmitButton = FancyButton.extend`
  width: 175px;
  height: 46px;
`;
const NameFields = styled.div`
  display: flex;
  width: 100%;

  input {
    width: calc(100% - 0.5rem);

    &:nth-child(odd) {
      margin-right: 0.5rem;
    }
    &:nth-child(even) {
      margin-left: 0.5rem;
    }
  }
`;

const Optional = styled.span`
  font-style: italic;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 175px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  padding: 0 0.5rem;

  &:-moz-ui-invalid:not(output) {
    box-shadow: none;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => navigateTo('/thanks/'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <FormWrapper>
          <h1>Contact Us</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium natus error sit. Visit Woods Produce →
          </p>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <Inputfield hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </Inputfield>
            <Inputfield>
              <label>
                Name<br />
                <NameFields>
                  <input
                    type="text"
                    name="firstName"
                    required
                    onChange={this.handleChange}
                    placeholder="First"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    onChange={this.handleChange}
                    placeholder="Last"
                  />
                </NameFields>
              </label>
            </Inputfield>
            <Inputfield>
              <label>
                Email<br />
                <input
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChange}
                />
              </label>
            </Inputfield>
            <Inputfield>
              <label>
                Phone - <Optional>Optional</Optional>
                <br />
                <input
                  type="phone"
                  name="phone"
                  required
                  onChange={this.handleChange}
                />
              </label>
            </Inputfield>
            <Inputfield>
              <label>
                Message<br />
                <TextArea
                  name="message"
                  required
                  onChange={this.handleChange}
                />
              </label>
            </Inputfield>
            <Inputfield>
              <SubmitButton type="submit">Send</SubmitButton>
            </Inputfield>
          </form>
        </FormWrapper>
      </Container>
    );
  }
}
