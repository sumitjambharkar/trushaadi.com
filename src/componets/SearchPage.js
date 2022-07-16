import React from 'react'
import "../App.css"
import UseNav from './UseNav'
import Footer from './Footer'

const SearchPage = () => {
  return (
    <>
    <UseNav/>
    <div className='container se mt-4'>
    <div className='row mt-3'>
      <div className='label col-md-3 sm-12'>
        <label>age</label>
      </div>
      <div className='col-md-7'>
        <select>
          <option>22</option>
        </select>
        <select>
          <option>22</option>
        </select>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Height</label>
      </div>
      <div className='col-md-7'>
        <select>
          <option>22</option>
        </select>
        <select>
          <option>22</option>
        </select>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Marital Status</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Religion</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Caste</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Mother Tongue</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Country</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
          <option></option>
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <span>Photo Settings</span>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
       <input type="checkbox"/>
         <span>  Only with photo</span>
        </div>
      </div>
    </div>

    <div className='row mt-3 mb-5'>
      <div className='col-md-3 sm-12'>
        <label></label>
      </div>
      <div className='col-md-7'>
      <button type="submit" class="btn" name="btnSearch"><i class="fa fa-search mr-2"></i> Search Profile</button>
      </div>
    </div>
  
  </div>
  <Footer />
  </>
  )
}
export default SearchPage
