import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { IncomingCall, IncomingCallPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/IncomingCall",
  component: IncomingCall,
} as ComponentMeta<typeof IncomingCall>;

const Template: ComponentStory<typeof IncomingCall> = (
  args: IncomingCallPropsI
) => (
  <x.div display="flex" gap="20px">
    <IncomingCall {...args} />
    <IncomingCall {...args} fill="red.500" />
    <IncomingCall {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
