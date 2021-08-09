import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Calling, CallingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Calling",
  component: Calling,
} as ComponentMeta<typeof Calling>;

const Template: ComponentStory<typeof Calling> = (args: CallingPropsI) => (
  <x.div display="flex" gap="20px">
    <Calling {...args} />
    <Calling {...args} fill="red.500" />
    <Calling {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
