import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Archway, ArchwayPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Archway",
  component: Archway,
} as ComponentMeta<typeof Archway>;

const Template: ComponentStory<typeof Archway> = (args: ArchwayPropsI) => (
  <x.div display="flex" gap="20px">
    <Archway {...args} />
    <Archway {...args} fill="red.500" />
    <Archway {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
