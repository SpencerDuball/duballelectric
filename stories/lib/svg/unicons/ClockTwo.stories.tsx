import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClockTwo, ClockTwoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClockTwo",
  component: ClockTwo,
} as ComponentMeta<typeof ClockTwo>;

const Template: ComponentStory<typeof ClockTwo> = (args: ClockTwoPropsI) => (
  <x.div display="flex" gap="20px">
    <ClockTwo {...args} />
    <ClockTwo {...args} fill="red.500" />
    <ClockTwo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
