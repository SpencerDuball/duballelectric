import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Text, TextPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: TextPropsI) => (
  <x.div display="flex" gap="20px">
    <Text {...args} />
    <Text {...args} fill="red.500" />
    <Text {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
