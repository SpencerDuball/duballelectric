import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bed, BedPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bed",
  component: Bed,
} as ComponentMeta<typeof Bed>;

const Template: ComponentStory<typeof Bed> = (args: BedPropsI) => (
  <x.div display="flex" gap="20px">
    <Bed {...args} />
    <Bed {...args} fill="red.500" />
    <Bed {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
