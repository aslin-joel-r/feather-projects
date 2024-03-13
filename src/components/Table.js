import './style.css'
import Button from  './Button'

const Table=()=>{

    return(
        <div>

  <table className='table-container'>

    <tr id='head'>
      <th>No</th>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Action</th>
    </tr>

    <tr>
      <td>01</td>
      <td><img className='image' src='https://th.bing.com/th/id/R.ad3050654d7e5734b0441640c6acb119?rik=YdlTSm5VCJcj1g&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2fa-p-j-abdul-kalam-3.jpg&ehk=iZENJYA%2b5OF049RV%2fknoovVWjYVY3Lo7lWMli9KXNpA%3d&risl=&pid=ImgRaw&r=0'/></td>
      <td>Aslin</td>
      <td>+91 5739629753</td>
      <td>Pattarivilai</td>
      <td><Button className='edit' content={'Edit'}/>
      <Button className='remove' content={'Remove'}/></td>
    </tr>

    <tr>
    <td>02</td>
    <td><img className='image' src='https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_steve_jobs.png'/></td>
    <td>Albert</td>
    <td>+91 8438502879</td>
    <td>Pillayarcoil</td>
    <td><Button className='edit' content={'Edit'}/>
    <Button className='remove' content={'Remove'}/></td>
    </tr>

    <tr>
    <td>03</td>
    <td><img className='image' src='https://www.tradingonline.me/wp-content/uploads/elon-musk.jpg'/></td>
    <td>Vinoth</td>
    <td>+91 8754309762</td>
    <td>Thengapatinam</td>
    <td><Button className='edit' content={'Edit'}/>
    <Button className='remove' content={'Remove'}/></td>
    </tr>

  </table>
</div>
    )
}

export default Table;