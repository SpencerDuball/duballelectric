import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tear, TearPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Tear",
  component: Tear,
} as ComponentMeta<typeof Tear>;

const Template: ComponentStory<typeof Tear> = (args: TearPropsI) => (
  <x.div display="flex" gap="20px">
    <Tear {...args} />
    <Tear {...args} fill="red.500" />
    <Tear {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
