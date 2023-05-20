import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
          <h4>Question 1:How does React works?</h4>
          <p>Answer:
          React Native uses native Application Programming Interfaces (APIs) to render mobile UI components in Objective-C (iOS) or Java (Android). Because of that, developers can create platform-specific components and share the source code across multiple platforms. A JavaScript library. A JavaScript framework.</p>

       <h4> Question 2:What is the differences between props and state?</h4>
        Answer:
        <p>State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. 
        A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.</p>
        
       <h4> Question 3:What are the React useEffect Hook usages?</h4>
        <p>Answer:
        1. Side Effect Runs After Every Render
        2. Side Effect Runs Only Once After Initial Render
        3. Side Effect Runs After State Value Changes
        4. Side Effect Runs After Props Value Change
        5. Side Effect Runs After Props and State Value Change
        6. Side Effect Cleanup</p>

        </div>
    );
};

export default Footer;