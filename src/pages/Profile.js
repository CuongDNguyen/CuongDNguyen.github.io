import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row title">
                    <div>
                        <label className="name">cuongnguyen</label>
                    </div>
                </div>
                <div className="row headers">
                    <div className="col-md-4">
                        <h3>Profiles</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li><a href="https://github.com/CuongDNguyen">github</a></li>
                            <li><a href="https://stackoverflow.com/users/11830343/cuong-nguyen?tab=profile">stack
                                overflow</a></li>
                            <li><a href="https://www.linkedin.com/in/cuong-nguyen-20701134/">linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;