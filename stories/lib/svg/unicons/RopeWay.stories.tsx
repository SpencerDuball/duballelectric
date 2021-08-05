import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RopeWay, RopeWayPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/RopeWay",
  component: RopeWay,
} as ComponentMeta<typeof RopeWay>;

const Template: ComponentStory<typeof RopeWay> = (args: RopeWayPropsI) => (
  <x.div display="flex" gap="20px">
    <RopeWay {...args} />
    <RopeWay {...args} fill="red.500" />
    <RopeWay {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
