import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tablet, TabletPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Tablet",
  component: Tablet,
} as ComponentMeta<typeof Tablet>;

const Template: ComponentStory<typeof Tablet> = (args: TabletPropsI) => (
  <x.div display="flex" gap="20px">
    <Tablet {...args} />
    <Tablet {...args} fill="red.500" />
    <Tablet {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
