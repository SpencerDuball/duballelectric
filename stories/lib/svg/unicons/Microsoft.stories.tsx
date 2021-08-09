import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Microsoft, MicrosoftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Microsoft",
  component: Microsoft,
} as ComponentMeta<typeof Microsoft>;

const Template: ComponentStory<typeof Microsoft> = (args: MicrosoftPropsI) => (
  <x.div display="flex" gap="20px">
    <Microsoft {...args} />
    <Microsoft {...args} fill="red.500" />
    <Microsoft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
