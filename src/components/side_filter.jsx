import React, {Fragment} from 'react';

const SideFilter = ({listSite}) => {
    console.log(listSite);
    return (
        <Fragment>
            <div className="table-frame">
                <div className="frame-header">Khu vui choi</div>
                <ul id="style3">
                    {listSite && listSite.map((item, i) => {
                        return (
                        <Fragment key={i}>
                            <li>
                                <div className="check-item">
                                    <input type="checkbox" id={i} name={i} onChange={(e)=>{
                                        console.log(e.target.value)
                                    }}/>
                                    <label htmlFor={i}><span><span></span></span>{item.name}</label>
                                </div>
                            </li>
                        </Fragment>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default SideFilter;