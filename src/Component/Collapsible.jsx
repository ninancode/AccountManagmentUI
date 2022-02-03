import React, {useState} from 'react';
import useCollapse from 'react-collapsed';
import BankAccountDetails from './BankAccountDetails';

export default function Collapsible() {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
return (
    // <div>
            
    <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? <BankAccountDetails/> : <BankAccountDetails/>}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
            </div>
        </div>
        // </div>
    );
}