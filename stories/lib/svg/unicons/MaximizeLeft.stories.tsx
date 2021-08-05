import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MaximizeLeft, MaximizeLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MaximizeLeft",
  component: MaximizeLeft,
} as ComponentMeta<typeof MaximizeLeft>;

const Template: ComponentStory<typeof MaximizeLeft> = (
  args: MaximizeLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <MaximizeLeft {...args} />
    <MaximizeLeft {...args} fill="red.500" />
    <MaximizeLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
