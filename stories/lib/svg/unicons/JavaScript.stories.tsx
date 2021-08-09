import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { JavaScript, JavaScriptPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/JavaScript",
  component: JavaScript,
} as ComponentMeta<typeof JavaScript>;

const Template: ComponentStory<typeof JavaScript> = (
  args: JavaScriptPropsI
) => (
  <x.div display="flex" gap="20px">
    <JavaScript {...args} />
    <JavaScript {...args} fill="red.500" />
    <JavaScript {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
