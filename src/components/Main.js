import * as React from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import Routing from './Routes';
import Footer from './Layouts/Footer';


const Main = (props) => {
    return (
        <>
            <Routing />
            <Footer />
        </>
    )
}

Main.propTypes = {
    
}
const mapStateToProps = state => ({
    
}) ;
const mapDispatchToProps = {
   
} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;