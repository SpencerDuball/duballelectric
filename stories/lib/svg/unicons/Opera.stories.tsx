import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Opera, OperaPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Opera",
  component: Opera,
} as ComponentMeta<typeof Opera>;

const Template: ComponentStory<typeof Opera> = (args: OperaPropsI) => (
  <x.div display="flex" gap="20px">
    <Opera {...args} />
    <Opera {...args} fill="red.500" />
    <Opera {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
