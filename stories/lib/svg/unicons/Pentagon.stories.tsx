import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pentagon, PentagonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Pentagon",
  component: Pentagon,
} as ComponentMeta<typeof Pentagon>;

const Template: ComponentStory<typeof Pentagon> = (args: PentagonPropsI) => (
  <x.div display="flex" gap="20px">
    <Pentagon {...args} />
    <Pentagon {...args} fill="red.500" />
    <Pentagon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
