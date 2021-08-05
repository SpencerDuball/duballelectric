import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HeadSide, HeadSidePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HeadSide",
  component: HeadSide,
} as ComponentMeta<typeof HeadSide>;

const Template: ComponentStory<typeof HeadSide> = (args: HeadSidePropsI) => (
  <x.div display="flex" gap="20px">
    <HeadSide {...args} />
    <HeadSide {...args} fill="red.500" />
    <HeadSide {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
