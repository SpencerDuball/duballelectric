import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SubwayAlt, SubwayAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SubwayAlt",
  component: SubwayAlt,
} as ComponentMeta<typeof SubwayAlt>;

const Template: ComponentStory<typeof SubwayAlt> = (args: SubwayAltPropsI) => (
  <x.div display="flex" gap="20px">
    <SubwayAlt {...args} />
    <SubwayAlt {...args} fill="red.500" />
    <SubwayAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
