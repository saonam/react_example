import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { getPlaceList } from '../actions/place'
import { getSiteList } from '../actions/site'
import SideFilter from '../components/side_filter.jsx'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_page: 1,
            next_page: 2,
            filter_place: {
                page: 1,
                per_page: '10',
                search: '',
                status: 1,
                site_ids: '',
                category_ids: ''
            }
        };
        
    }
    
    componentDidMount() {
        this.props.getPlaceList(this.state.filter_place)

        let filter_site = {
            page: 1,
            per_page: '10',
            search: '',
            status: 1
        }
        
        this.props.getSiteList(filter_site)
    }
    
    render() {
        console.log(this.props.lstPlace);
        console.log(this.props.lstSite);
        return (
            <div className="main">
                <div className="table-sidebar">
                    <SideFilter listSite={this.props.lstSite} />
                </div>
                <div className="table-content">
                    <div className="table-header">
                        <div className="row">
                            <div className="col-sm-12">
                            action
                            </div>
                        </div>
                    </div>
                    <div className="table-left">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr style={{background: '#f2f0f5'}}>
                                    <th width="5%" className="row-check">
                                        <div className="check-item" style={{marginBottom: '17px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                            <input type="checkbox" id="rowall" name="rowall" />
                                            <label htmlFor="rowall">
                                                <span>
                                                    <span></span>
                                                </span>
                                            </label>
                                        </div>
                                    </th>
                                    <th width="30%">
                                        <div>
                                            <label>Địa danh</label>
                                            <div className="sort-location">
                                                <i class="fa fa-fw fa-sort"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th width="30%">
                                        <div>
                                            <label>Khu vui chơi</label>
                                            <div class="sort-location">
                                                <i class="fa fa-fw fa-sort"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th width="20%">
                                        <div>
                                            <label>Danh mục dịch vụ</label>
                                            <div class="sort-location">
                                                <i class="fa fa-fw fa-sort"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th width="10%">
                                        <div>
                                            <label>Hiển thị</label>
                                        </div>
                                    </th>
                                    <th width="5%"></th>
                                </tr>
                            </thead>
                            <tbody id="style3">
                                {this.props.lstPlace && this.props.lstPlace.map((item, i) => {
                                    return (
                                    <Fragment key={i}>
                                        <tr key={i}>
                                            <td width="5%"> 
                                                <div className="row-loaction row-loaction-check">
                                                    <div className="box-center-check"></div>
                                                    <div className="check-item">
                                                        <input type="checkbox" id={'row' + i} name={'row' + i}/>
                                                        <label htmlFor={'row' + i}>
                                                            <span>
                                                                <span></span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td width="30%">
                                                <div className="row-loaction">
                                                    <img src={item.avatar} />
                                                    <span>{item.name}</span>
                                                </div>
                                            </td>
                                            <td width="30%">
                                                <div className="row-loaction">
                                                    <div className="box-center"></div>
                                                    <span>{item.site_name}</span>
                                                </div>
                                            </td>
                                            <td width="20%">
                                                <div className="row-loaction">
                                                    <div className="box-center"></div>
                                                    <span>{item.cate_name}</span>
                                                </div>
                                            </td>
                                            <td width="10%">
                                                <div className="row-loaction">
                                                    <div className="box-center"></div>

                                                    <span className="switch switch-sm">
                                                        <input type="checkbox" className="switch"
                                                            id={'sw' + i} name="status" />
                                                        <label htmlFor={'sw' + i} style={{marginLeft: '5px', marginTop: '15px'}}>
                                                        </label>
                                                    </span>
                                                </div>
                                            </td>
                                            <td width="5%">
                                                6
                                            </td>
                                        </tr>
                                    </Fragment>
                                    );
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lstPlace: state.place.listPlace,
        lstSite: state.site.listSite
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPlaceList: (params) => {
            dispatch(getPlaceList(params))
        },
        getSiteList: (params) => {
            dispatch(getSiteList(params))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

