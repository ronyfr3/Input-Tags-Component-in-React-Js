import React,{ useState } from 'react'
import {ImCross} from 'react-icons/im'

const InputTagComponent = () => {
    const [tags, setTags] = useState([]);
    
    const removeTag = (i) => {
      const newTags = [ ...tags ];
      //newTags.splice(i,1) etao use korte pari abr filter method o same
      //we get removeTag(tags.length-1 = 1 coz if tags has 2 values so lenght=2 and 2-1=1)
      //then splice(koto index er value remove hbe , koita value remove hbe)
      //splice(1,1)=ses er tag value ta remove hoye jbe backspace chap dile
      
      //option 1 etao use korte paro
      //newTags.splice(i, 1);

      //option 2 ami eta use koreci
      setTags(newTags.filter((_,index)=> index !== i))
    };
  
    const inputKeyDown = (e) => {
              //replace(/j value ta change hbe/global,'changed hoye ja hbe')
              //suppose we type react, then enter it will save just react comma is replaced by ''
             //value enter e click korle input field e capital hisebe add hbe
              const val = (e.target.value).trim().replace(/[',','"','.',':','!','@','0','1','2','3','4','5','6','7','8','9']/g,'');
     
      //Enter holo keyboard event er option
      //sudhu matro enter btn e click ey tag add hbe 
      if (e.key === 'Enter' && val) {

          //tag add korar age check kora hsse duplication ase kina
          if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          return alert('no duplication allowed');
        }  
        setTags([...tags, val])
        e.target.value=''
    }     
     //   if no value and hit backspace it edit last tag
     if (e.key === 'Backspace' && !val) {
           
        //we want to filter 1 item,if tags are 2 items,,we pass props as tags.length-1=(2-1)=1
        //so 1item has passing as props to removeTag func
        //then its filter current index(if 2tags in state) = 2 !== 1(PASSING PROPS) then filter number 1 index tag from tags
        //option 1
        //we can you removeTag(tags.length-1) instead of setTags(tags.slice(tags.index,-1))
        // removeTag(tags.length-1)

        //option 2 
        //slice(0,-1)
        //tags er j tag gula ase tader o index e j element ase oita theke suru kore
        //last er jeta sudhu seta remove hbe baki 0 index theke sob thakbe
       
        // example::: 
        // var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","pizza"];
        // var myBest = fruits.slice(4,-1); output::mango
        // var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","piza"];
        // var myBest = fruits.slice(3,-1); output::Apple,Mango
        // var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","pizza"];
        // var myBest = fruits.slice(0,-1); output::Banana,Orange,Lemon,Apple,Mango
        //so, setTags(tags.slice(tags.lastIndexOf-1,-1)) == setTags(tags.slice(0,-1)) same
        
        setTags(tags.slice(0,-1))
        
    }
  }

    return (
      <div className="input-tag">
        <ul className="input-tag__tags">
          { tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              {/* removetag(i) ey i=index value ta ashbe cross btn e click korar por */}
              <button type="button" onClick={() => { removeTag(i) }}><ImCross style={{fontSize:'12px',backgroundColor:'transparent',textAlign:'center'}}/></button>
            </li>
          ))}
          <li className="input-tag__tags__input">
              <input 
              type="text" 
              onKeyDown={inputKeyDown}
              autoFocus
              />
              </li>
        </ul>
      </div>
    );
  }

export default InputTagComponent
