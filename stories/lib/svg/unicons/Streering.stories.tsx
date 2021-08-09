import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Streering, StreeringPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Streering",
  component: Streering,
} as ComponentMeta<typeof Streering>;

const Template: ComponentStory<typeof Streering> = (args: StreeringPropsI) => (
  <x.div display="flex" gap="20px">
    <Streering {...args} />
    <Streering {...args} fill="red.500" />
    <Streering {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
