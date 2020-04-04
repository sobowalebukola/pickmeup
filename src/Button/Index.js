import React from "react";
import { Button, Icon } from 'semantic-ui-react';


const ButtonExampleIcon = (props) => (
      <Button animated style = {{ position: "absolute", bottom : "5%" , left: "2%", color : "coral"}} onClick =  {props.onClick}>
        <Button.Content visible>Find me</Button.Content>
        <Button.Content hidden>
          <Icon name='marker'  style =  {{color :"Orange"}}/>
        </Button.Content>
      </Button>
  )

export default ButtonExampleIcon;