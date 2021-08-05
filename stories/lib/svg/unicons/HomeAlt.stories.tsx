import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HomeAlt, HomeAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HomeAlt",
  component: HomeAlt,
} as ComponentMeta<typeof HomeAlt>;

const Template: ComponentStory<typeof HomeAlt> = (args: HomeAltPropsI) => (
  <x.div display="flex" gap="20px">
    <HomeAlt {...args} />
    <HomeAlt {...args} fill="red.500" />
    <HomeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
